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
        ? "https://dte4lj9t9uodb.cloudfront.net/DouglasResume_pt-BR.pdf"
        : "https://dte4lj9t9uodb.cloudfront.net/DouglasResume_en-US.pdf"
    );
  }, [language]);

  return DouglasResume;
};

export default useResume;
