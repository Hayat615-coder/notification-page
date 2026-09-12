# 🔔 Interactive Notifications Page

A modern, responsive, and fully accessible **Notifications Page** component built with **React**, **TypeScript**, and **Tailwind CSS**. Designed to handle real-time state updates, conditional rendering, and dynamic image bundling seamlessly.

![Project Preview](https://img.shields.io/badge/Frontend_Mentor-Challenge-3e52a3?style=for-the-badge&logo=frontendmentor)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwindcss)

---

## ✨ Features

- 🎯 **Real-Time Unread Counter**: Dynamic badge that updates instantly based on notification state.
- 🔴 **Visual Indicators**: Highlighted card backgrounds and inline unread indicators for new notifications.
- ⚡ **Interactive State Management**: 
  - Click individual notifications to mark them as read.
  - Click **"Mark all as read"** to clear all unread badges simultaneously.
- 🖼️ **Dynamic Content Types**:
  - Support for custom targeted links (Posts, Groups, Messages).
  - Private message container rendering.
  - Interactive picture attachment thumbnails.
- 📱 **Fully Responsive Layout**: Centered card design tailored for desktop, tablet, and mobile displays.

---

## 📁 Project Structure

```text
src/
├── assets/                  # WebP images & avatars
├── notificationsData.ts     # Mock notification data & asset imports
├── App.tsx                  # Main interactive Notifications application
└── App.css                  # Custom styling & Tailwind imports
