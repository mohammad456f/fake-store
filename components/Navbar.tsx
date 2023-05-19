import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/");
    } else {
      router.push("/about");
    }
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" onClick={() => router.push("/")} />
        <Tab label="About" onClick={() => router.push("/about")} />
      </Tabs>
    </>
  );
};

export default Navbar;
