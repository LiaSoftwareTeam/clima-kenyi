import { createClient } from "@libsql/client";

export const connection = createClient({
  url: "libsql://clima-kenyeli-agrolia.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzIyMzYxMzMsImlkIjoiYWFiYzhiYjktMTlhYS00MTMyLTkzMDYtNjZlNWY0NDQ1NjZjIn0.q7iU_xFVEj0SWhRV2ew0b0Awj99op-8gJ02kp4sTPDZl198AZ8RVeffWSIJdX6fcc083M1qLu96RsW9kEiNHDg",
});
