# Booking application

# POST

Create Events
`http://localhost:3001/V1/api/events`

```js
{
"name":"React.js Global Summit",
"date":"06/03/2024",
"capacity":100
}
```

# GET

Find Events
`http://localhost:3001/V1/api/events`

# POST

Book Ticket
`http://localhost:3001/V1/api/bookings`

Body

```json
{
  "user": "m.s.jadhav",
  "eventId": "65e055f7eca196e8e3824115"
}
```

# PUT

Update Event
`http://localhost:3001/V1/api/events`

Body

```json
{
  "eventId": "65e055f7eca196e8e3824115",
  "name": "Some Event Name"
}
```

# DELETE

Delete Event
`http://localhost:3001/V1/api/events/65e05677a22c2fc042de120c`
