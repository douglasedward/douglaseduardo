import mixpanel from "mixpanel-browser";

mixpanel.init(import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN, {
  ignore_dnt: true,
});

export { mixpanel };
