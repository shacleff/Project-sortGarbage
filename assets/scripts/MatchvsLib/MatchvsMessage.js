//定义了Matchvs网络事件
var msg = {
    MATCHVS_INIT : "MATCHVS_INIT",
    MATCHVS_REGISTER_USER:"MATCHVS_REGISTER_USER",
    MATCHVS_LOGIN:"MATCHVS_LOGIN",
    MATCHVS_RE_CONNECT :"MATCHVS_RE_CONNECT",
    MATCHVS_ERROE_MSG : "MATCHVS_ERROE_MSG",
    MATCHVS_JOIN_ROOM_RSP : "MATCHVS_JOIN_ROOM_RSP",
    MATCHVS_JOIN_ROOM_NOTIFY:"MATCHVS_JOIN_ROOM_NOTIFY",
    MATCHVS_LEAVE_ROOM: "MATCHVS_LEAVE_ROOM",
    MATCHVS_LEAVE_ROOM_NOTIFY: "MATCHVS_LEAVE_ROOM_NOTIFY",
    MATCHVS_JOIN_OVER_RSP: "MATCHVS_JOIN_OVER_RSP",
    MATCHVS_JOIN_OVER_NOTIFY: "MATCHVS_JOIN_OVER_NOTIFY",
    MATCHVS_JOIN_OPEN_RSP: "MATCHVS_JOIN_OPEN_RSP",
    MATCHVS_JOIN_OPEN_NOTIFY: "MATCHVS_JOIN_OPEN_NOTIFY",
    MATCHVS_ROOM_LIST_EX: "MATCHVS_ROOM_LIST_EX",
    MATCHVS_CREATE_ROOM : "MATCHVS_CREATE_ROOM",
    MATCHVS_ROOM_DETAIL : "MATCHVS_ROOM_DETAIL",
    MATCHVS_KICK_PLAYER : "MATCHVS_KICK_PLAYER",
    MATCHVS_KICK_PLAYER_NOTIFY : "MATCHVS_KICK_PLAYER_NOTIFY",
    MATCHVS_SET_ROOM_PROPETY : "MATCHVS_SET_ROOM_PROPETY",
    MATCHVS_SET_ROOM_PROPETY_NOTIFY : "MATCHVS_SET_ROOM_PROPETY_NOTIFY",
    MATCHVS_SEND_EVENT_RSP : "MATCHVS_SEND_EVENT_RSP",
    MATCHVS_SEND_EVENT_NOTIFY : "MATCHVS_SEND_EVENT_NOTIFY",
    MATCHVS_FRAME_UPDATE : "MATCHVS_FRAME_UPDATE",
    MATCHVS_WX_BINDING: "MATCHVS_WX_BINDING",
    MATCHVS_NETWORK_STATE_NOTIFY: "MATCHVS_NETWORK_STATE_NOTIFY",
    MATCHVS_LOGOUT: "MATCHVS_LOGOUT",

    EVENT_GAIN_SCORE:"gainScore",
    GAME_START_EVENT:"gameStart",
    EVENT_GAME_START:"EVENT_GAME_START",
};

module.exports = msg;