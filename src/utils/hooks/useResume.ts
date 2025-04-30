import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useResume = () => {
  const [DouglasResume, setDouglasResume] = useState<string>("");
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    setDouglasResume(
      language === "pt"
        ? "https://rentify-s3-photos.s3.sa-east-1.amazonaws.com/DouglasResume.pdf"
        : "https://rentify-s3-photos.s3.sa-east-1.amazonaws.com/DouglasResumeEN.pdf"
    );
  }, [language]);

  return DouglasResume;
};

export default useResume;
