import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      await axios.post("/api/events", { name, date, location, description });
      alert("Event created successfully");
      fetchEvents();
    } catch (error) {
      alert("Failed to create event");
    }
  };

  return (
    <div>
      <h1>Event Booking App</h1>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.name}</strong> - {event.date} - {event.location} -{" "}
            {event.description}
          </li>
        ))}
      </ul>
      <h2>Create Event</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}

export default App;
