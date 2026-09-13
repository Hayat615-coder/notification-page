import avatarMarkWebber from "./assets/avatar-mark-webber.webp";
import avatarAngelaGray from "./assets/avatar-angela-gray.webp";
import avatarJacobThompson from "./assets/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "./assets/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "./assets/avatar-kimberly-smith.webp";
import imageChess from "./assets/image-chess.webp";
import avatarNathanPeterson from "./assets/avatar-nathan-peterson.webp";
import avatarAnnaKim from "./assets/avatar-anna-kim.webp";

export type TargetType = "post" | "group" | "message" | "picture";

export interface User {
  name: string;
  avatar: string;
}

export interface NotificationItem {
  id: number;
  user: User;
  action: string;
  target?: string;
  targetType?: TargetType;
  time: string;
  isUnread: boolean;
  message?: string;
  picture?: string;
}

export const InitialNotification: NotificationItem[] = [
  {
    id: 1,
    user: {
      name: "Mark Webber",
      avatar: avatarMarkWebber,
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
      avatar: avatarAngelaGray,
    },
    action: "followed you",
    time: "5m ago",
    isUnread: true,
  },
  {
    id: 3,
    user: {
      name: "Jacob Thompson",
      avatar: avatarJacobThompson,
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
      avatar: avatarRizkyHasanuddin,
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
      avatar: avatarKimberlySmith,
    },
    action: "commented on your picture",
    time: "1 week ago",
    isUnread: false,
    picture: imageChess,
  },
  {
    id: 6,
    user: {
      name: "Nathan Peterson",
      avatar: avatarNathanPeterson,
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
      avatar: avatarAnnaKim,
    },
    action: "left the group",
    target: "Chess Club",
    targetType: "group",
    time: "2 weeks ago",
    isUnread: false,
  },
];
