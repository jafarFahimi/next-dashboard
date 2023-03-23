import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "components/Header";
import { tokens } from "styles/theme";

import { EventApi, EventInput } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import { GridDeleteIcon } from "@mui/x-data-grid";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[] | []>([]);
  const [open, setOpen] = useState(false);
  const [eventText, setEventText] = useState<string | undefined>(undefined);
  const [selectedEvent, setSelectedEvent] = useState<null | EventInput>(null);

  const handleDateClick = () => {
    const calendarApi = selectedEvent?.view.calendar;
    if (eventText) {
      calendarApi.addEvent({
        id: `${selectedEvent?.dateStr}-${eventText}`,
        title: eventText,
        start: selectedEvent?.startStr,
        end: selectedEvent?.endStr,
        allDay: selectedEvent?.allDay,
      });
    }
    setSelectedEvent(null);
    calendarApi.unselect();

    setEventText(undefined);
    setOpen(false);
  };

  const handleEventClick = (selected: EventInput) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    )
      selected.event.remove();
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      {/* user enter its event text in this input: */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setEventText(undefined);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: colors.primary[400],
            color: colors.grey[100],
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Enter Event Title :
          </Typography>
          <Input
            style={{ margin: "1rem 0", fontSize: "1.1rem" }}
            placeholder="New Event"
            type="text"
            fullWidth
            value={eventText}
            onChange={(e: any) => setEventText(e.target?.value)}
          />
          <br />
          <br />
          <Button
            onClick={handleDateClick}
            variant="contained"
            color="secondary"
          >
            Enter Event
          </Button>
        </Box>
      </Modal>

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: EventApi) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start as Date, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                      {event.end
                        ? ` to ${formatDate(event.end as Date, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}`
                        : undefined}
                    </Typography>
                  }
                />
                <IconButton
                  onClick={() => event.remove()}
                  sx={{ "&:hover": { color: "green" } }}
                >
                  <GridDeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={(selected: EventInput) => {
              setSelectedEvent(selected);
              setOpen(true);
            }}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) =>
              setCurrentEvents(events as EventApi[])
            }
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
