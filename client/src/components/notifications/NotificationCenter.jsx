import React, { useContext } from 'react';
    import { NotificationContext } from '../../contexts/NotificationContext';
    import { motion, AnimatePresence } from 'framer-motion';

    function NotificationCenter() {
      const { notifications, markAsRead, removeNotification, clearAllNotifications } = useContext(NotificationContext);

      const notificationVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };

      return (
        <div className="fixed top-4 right-4 z-50">
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                className={`bg-white p-4 rounded shadow-md mb-2 border-l-4 ${
                  notification.type === 'success' ? 'border-green-500' :
                  notification.type === 'warning' ? 'border-yellow-500' :
                  notification.type === 'error' ? 'border-red-500' : 'border-blue-500'
                }`}
                variants={notificationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="flex justify-between items-center">
                  <p>{notification.message}</p>
                  <div>
                    {!notification.read && (
                      <button onClick={() => markAsRead(notification.id)} className="text-gray-500 hover:text-gray-700 mr-2">
                        Marquer comme lu
                      </button>
                    )}
                    <button onClick={() => removeNotification(notification.id)} className="text-gray-500 hover:text-gray-700">
                      X
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {notifications.length > 0 && (
            <button onClick={clearAllNotifications} className="bg-gray-200 p-2 rounded hover:bg-gray-300">
              Tout effacer
            </button>
          )}
        </div>
      );
    }

    export default NotificationCenter;
