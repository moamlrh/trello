import {
    Dashboard,
    PeopleOutline,
    FavoriteBorder,
    TableChart,
    SettingsOutlined,
    FeaturedVideo,
    Home,
} from "@material-ui/icons";


export const tabs = [
    { id: 1, title: "Boards", Icon: Dashboard,url:'/boards' },
    { id: 2, title: "Templates", Icon: FeaturedVideo,url:'/templates' },
    { id: 3, title: "Home", Icon: Home,url:'/home' },
];
export const teams = [
    { id: 0, name: "First Team" },
    { id: 1, name: "Test Team" },
];
export const items = [
    { id: 0, name: "Boards", url: "/boards", Icon: Dashboard },
    { id: 1, name: "Highlights", url: "/highlights", Icon: FavoriteBorder },
    { id: 2, name: "Team table", url: "/team-table", Icon: TableChart },
    { id: 3, name: "Members", url: "/members", Icon: PeopleOutline },
    { id: 4, name: "Settings", url: "/settings", Icon: SettingsOutlined },
];