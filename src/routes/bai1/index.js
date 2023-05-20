import Bai1 from "../../components/Bai1";
import ListFavorite from "../../components/Bai1/ListFavorite";
import ListPhoneNumber from "../../components/Bai1/ListPhoneNumber";

export const bai1Router = {
  path: "bai1",
  element: <Bai1 />,
  children: [
    { element: <ListPhoneNumber />, index: true },
    { path: "normal", element: <ListPhoneNumber /> },
    { path: "favorite", element: <ListFavorite /> },
  ],
};
