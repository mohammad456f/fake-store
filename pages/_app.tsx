import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { Stack } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Stack maxWidth={960} sx={{ margin: "0 auto" }} gap={6}>
          <Navbar />
          <Component {...pageProps} />
        </Stack>
      </Provider>
    </>
  );
}
