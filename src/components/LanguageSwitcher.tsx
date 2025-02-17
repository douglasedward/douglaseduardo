import { FlagUnitedStates } from "@/assets/svg/FlagUnitedStates";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FlagBrazil } from "@/assets/svg/FlagBrazil";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  return (
    <Select defaultValue={i18n.language} onValueChange={changeLanguage}>
      <SelectTrigger className="max-w-20 vvs:max-w-36">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <div className="flex items-center gap-x-2">
            <FlagUnitedStates width={25} height={25} />
            <span className="hidden vvs:block">English</span>
          </div>
        </SelectItem>
        <SelectItem value="pt">
          <div className="flex items-center gap-x-2">
            <FlagBrazil width={25} height={25} />
            <span className="hidden vvs:block">Português</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
