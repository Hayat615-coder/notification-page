import "./App.css";
import Angela from "./assets/avatar-angela-gray.webp";
import "./assets/avatar-anna-kim.webp";
import "./assets/avatar-jacob-thompson.webp";
import "./assets/avatar-kimberly-smith.webp";
import mark from "./assets/avatar-mark-webber.webp";
import "./assets/avatar-nathan-peterson.webp";
import "./assets/avatar-rizky-hasanuddin.webp";
import "./assets/image-chess.webp";

function App() {
  return (
    <>
      <div className="flex items-center justify-center bg-[hsl(210,60%,98%)]">
        <div className="flex bg-white mt-4 p-4 rounded-lg flex-col">
          <header className="flex flex-row items-center justify-between gap-8">
            <div className="flex flex-row gap-2">
              <h1 className="text-3xl font-semibold">Notifications</h1>
              <button
                type="button"
                className="bg-blue-950 text-white px-3 text-sm font-bold py-0 rounded-lg"
              >
                3
              </button>
            </div>
            <button type="submit" className="text-gray-400">
              Mark all as read
            </button>
          </header>
          <ul className="mt-4">
            <li className="flex flex-row gap-2 bg-[hsl(210,60%,98%)] p-4 rounded-lg">
              <img src={mark} alt="Mark" className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="flex gap-1 font-bold text-gray-600">
                  Mark Webber{" "}
                  <span className="text-gray-400">
                    reacted to your recent post
                  </span>
                  <span className="font-bold text-gray-600">
                    My first tornament today!
                  </span>
                  <span className="w-2 h-2 bg-red-600 rounded-full items-center my-2"></span>
                </p>
                <p className="text-gray-400">1m ago</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
