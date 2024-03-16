"use client";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { display } from "@mui/system";

const VideoPopUp = () => {
  const [isOpened, setIsOpened] = useState(true);

  const CloseButtonHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpened(false);
  };

  const ContainerVariants: Variants = {
    open: {
      x: 0,
      scale: 0.5,
      transition: { duration: 0.5 },
      position: "fixed",
    },
    closed: {
      x: -500,
      scale: 0.5,
      transition: { duration: 0.5 },
      position: "fixed",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={"open"}
        variants={ContainerVariants}
        animate={isOpened ? "open" : "closed"}
        exit={{ opacity: 0, display: "none" }}
        className={"w-fit h-fit lg:block hidden lg:fixed bottom-0 left-0"}
        id={"popupContainer"}
      >
        <div id={"popupContainerWrapper"} className={"relative p-2"}>
          <div
            role={"button"}
            onClick={CloseButtonHandler}
            className={"cursor-pointer z-50 absolute -top-4 -left-4"}
          >
            <IoMdCloseCircleOutline size={"3em"} />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@theskincarerecipe/video/7339236948743032096" data-video-id="7339236948743032096" data-embed-from="embed_page" style="max-width:605px; min-width:325px;"> <section> <a target="_blank" title="@theskincarerecipe" href="https://www.tiktok.com/@theskincarerecipe?refer=embed">@theskincarerecipe</a> <p>Produsele chiar m-au ajutat foarte mult cu caderea parului, dar si cu regenerarea acestuia. Urmeaza si partea a doua😊 Sper sa va ajute🫶🏻</p> <a target="_blank" title="♬ som original - 𝒆𝒅𝒖𝒆𝒗𝒍'𝒔 - 𝒆𝒅𝒖𝒆𝒗𝒍'𝒔" href="https://www.tiktok.com/music/som-original-𝒆𝒅𝒖𝒆𝒗𝒍'𝒔-7300714218735192837?refer=embed">♬ som original - 𝒆𝒅𝒖𝒆𝒗𝒍'𝒔 - 𝒆𝒅𝒖𝒆𝒗𝒍'𝒔</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
            }}
            id={"tiktokVideoContainer"}
          ></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPopUp;
