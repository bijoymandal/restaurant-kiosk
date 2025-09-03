# 🍔 Restaurant Ordering Kiosk + Kitchen Dashboard

A full-stack application for managing restaurant orders through a **self-service customer kiosk** and a **kitchen dashboard** that receives orders in real time.  

---

## 🎥 Demo Video

▶️ [Watch Demo](./docs/demo.mp4)  
*(Record using OBS Studio or any screen recorder. Place the video in `/docs/demo.mp4` so GitHub can link it.)*

---

## ✨ Features

- 📱 **Customer Kiosk** – Place food orders easily.  
- 🧑‍🍳 **Kitchen Dashboard** – View and manage incoming orders in real time.  
- 🔄 **Live Updates** – Status changes instantly reflect on both ends.  
- 📊 **Order History** – Track completed and pending orders.  
- 🛡️ **Failure Handling** – Robust handling of network/server failures.  

---

## 🏗️ Architecture

flowchart LR
    A[Customer Kiosk UI] -->|Place Order| B[Backend API]
    B --> C[(PostgreSQL Database)]
    B -->|Notify via WebSocket| D[Kitchen Dashboard]
    D -->|Update Order Status| B
    B -->|Reflect Status| A
# restaurant-kiosk
