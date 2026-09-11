import Angela from "./assets/avatar-angela-gray.webp";
import anna from "./assets/avatar-anna-kim.webp";
import jacob from "./assets/avatar-jacob-thompson.webp";
import kimberly from "./assets/avatar-kimberly-smith.webp";
import mark from "./assets/avatar-mark-webber.webp";
import nathan from "./assets/avatar-nathan-peterson.webp";
import rizky from "./assets/avatar-rizky-hasanuddin.webp";
import chess from "./assets/image-chess.webp";

export const InitialNotification = [
  {
    id: 1,
    user: {
      name: "Mark Webber",
      avatar: { mark },
    },
    action: "reacted to your recent post",
    target: "My first tournament today!",
    targetType: "post",
    time: "1m ago",
    isUnread: true,
  },
  {
    id: 2,
    user: {
      name: "Angela Gray",
      avatar: { Angela },
    },
    action: "followed you",
    time: "5m ago",
    isUnread: true,
  },
  {
    id: 3,
    user: {
      name: "Jacob Thompson",
      avatar: { jacob },
    },
    action: "has joined your group",
    target: "Chess Club",
    targetType: "group",
    time: "1 day ago",
    isUnread: true,
  },
  {
    id: 4,
    user: {
      name: "Rizky Hassanudin",
      avatar: { rizky },
    },
    action: "sent you a private message",
    targetType: "message",
    time: "5 days ago",
    isUnread: false,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    user: {
      name: "Kimberly Smith",
      avatar: { kimberly },
    },
    action: "commented on your picture",
    time: "1 week ago",
    isUnread: false,
    picture: { chess },
  },
  {
    id: 6,
    user: {
      name: "Nathan Peterson",
      avatar: { nathan },
    },
    action: "reacted to your recent post",
    target: "5 end-game strategies to increase your win rate",
    targetType: "post",
    time: "2 weeks ago",
    isUnread: false,
  },
  {
    id: 7,
    user: {
      name: "Anna Kim",
      avatar: { anna },
    },
    action: "left the group",
    target: "Chess Club",
    targetType: "post",
    time: "2 weeks ago",
    isUnread: false,
  },
];
