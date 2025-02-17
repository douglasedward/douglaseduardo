import { FlagUnitedStates } from "@/assets/svg/FlagUnitedStates";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FlagBrazil } from "@/assets/svg/FlagBrazil";

const Language = () => {
  return (
    <Select>
      <SelectTrigger className="max-w-36">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en-US">
          <div className="flex items-center gap-x-2">
            <FlagUnitedStates />
            <span className="hidden vvs:block">English</span>
          </div>
        </SelectItem>
        <SelectItem value="pt-BR">
          <div className="flex items-center gap-x-2">
            <FlagBrazil />
            Português
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Language;
