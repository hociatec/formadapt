import React, { createContext, useState } from 'react';
    import { v4 as uuidv4 } from 'uuid';

    export const NotificationContext = createContext();

    function NotificationProvider({ children }) {
      const [notifications, setNotifications] = useState([]);

      const addNotification = (message, type = 'info') => {
        const newNotification = {
          id: uuidv4(),
          message,
          type,
          read: false,
        };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
      };

      const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === id ? { ...notification, read: true } : notification
          )
        );
      };

      const removeNotification = (id) => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== id)
        );
      };

      const clearAllNotifications = () => {
        setNotifications([]);
      };

      const value = {
        notifications,
        addNotification,
        markAsRead,
        removeNotification,
        clearAllNotifications,
      };

      return (
        <NotificationContext.Provider value={value}>
          {children}
        </NotificationContext.Provider>
      );
    }

    export default NotificationProvider;
