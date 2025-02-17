import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useResume = () => {
  const [DouglasResume, setDouglasResume] = useState<string | undefined>(
    undefined
  );
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const loadResume = async () => {
      let resume;
      if (language === "pt") {
        resume = await import("@/assets/DouglasEduardo_pt-BR.pdf");
      } else {
        resume = await import("@/assets/DouglasEduardo_en-US.pdf");
      }
      setDouglasResume(resume.default); // `default` contains the resolved path from dynamic import
    };

    loadResume();
  }, [language]);

  return DouglasResume;
};

export default useResume;
