import { mixpanel } from "@/lib/mixpanel";

export interface ITrackingService {
  track: (event: string, properties?: Record<string, unknown>) => void;
}

export const defaultTrackingService: ITrackingService = {
  track: (event, properties) => {
    mixpanel.track(event, properties);
  },
};
