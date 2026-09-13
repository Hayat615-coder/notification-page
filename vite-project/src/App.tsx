import "./App.css";
import { useState } from "react";
import { InitialNotification } from "./notificationsData";

function App() {
  const [notifications, setNotifications] = useState(InitialNotification);
  const unreadNotifications = notifications.filter(
    (item) => item.isUnread,
  ).length;
  const markAllAsRead = () => {
    setNotifications((items) =>
      items.map((notification) => ({
        ...notification,
        isUnread: false,
      })),
    );
  };
  const handleNotificationClick = (id: number) => {
    setNotifications((items) =>
      items.map((notification) =>
        notification.id === id
          ? { ...notification, isUnread: false }
          : notification,
      ),
    );
  };
  return (
    <>
      <div className="flex items-center justify-center bg-[hsl(210,60%,98%)]">
        <div className="flex bg-white mt-4 p-4 rounded-lg flex-col">
          <header className="flex flex-row items-center justify-between gap-8">
            <div className="flex flex-row gap-2">
              <h1 className="text-3xl font-semibold">Notifications</h1>

              {unreadNotifications > 0 && (
                <span className="bg-blue-950 text-white px-3 text-sm font-bold py-2 rounded-lg">
                  {" "}
                  {unreadNotifications}{" "}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={markAllAsRead}
              className="text-gray-400"
            >
              Mark all as read
            </button>
          </header>

          <div className="flex flex-col gap-3">
            {notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNotificationClick(item.id)}
                className={`flex flex-row gap-2 p-4 rounded-lg cursor-pointer ${item.isUnread ? "bg-[hsl(210,60%,98%)]" : "bg-transparent"}`}
              >
                <div className="flex gap-3 items-start w-full">
                  <img
                    src={item.user.avatar}
                    alt={item.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 text-sm text-slate-600">
                    <div>
                      <span className="font-bold text-slate-900 hover:text-blue-900 mr-1">
                        {item.user.name}
                      </span>
                      <span>{item.action}</span>

                      {item.target && (
                        <span
                          className={`ml-1 font-bold ${
                            item.targetType === "group"
                              ? "text-blue-900 hover:text-blue-900"
                              : "text-slate-600 hover:text-blue-900"
                          }`}
                        >
                          {item.target}
                        </span>
                      )}

                      {item.isUnread && (
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1.5 mb-0.5"></span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>

                    {item.message && (
                      <div className="mt-3 p-4 border border-slate-200 rounded-md bg-white hover:bg-slate-100 text-slate-600 transition-colors">
                        {item.message}
                      </div>
                    )}
                  </div>
                </div>

                {item.picture && (
                  <img
                    src={item.picture}
                    alt="Commented attachment"
                    className="w-10 h-10 rounded-md object-cover ml-3 shrink-0 hover:border-2 border-slate-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
