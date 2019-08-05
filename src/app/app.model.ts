export interface DrawerTranslation {
  search: {
    placeholder: string;
  };
  home: {
    title: string;
  };
  about: {
    title: string;
  };
  getStarted: {
    title: string;
  };
  components: {
    title: string;
    children: {
      accordion: string;
      collapsible: string;
      button: string;
      calendar: string;
      dropdown: string;
      list: string;
      modal: string;
      table: string;
      tooltip: string;
    };
  };
  forms: {
    title: string;
    children: {
      buttonToggle: string;
      checkbox: string;
      checkboxList: string;
      datePicker: string;
      input: string;
      label: string;
      radio: string;
      select: string;
      slider: string;
      switch: string;
      textarea: string;
    };
  };
  css: {
    title: string;
    children: {
      card: string;
      divider: string;
      icon: string;
      ripple: string;
    };
  };
  layout: {
    title: string;
    children: {
      drawer: string;
      footer: string;
      navbar: string;
      tab: string;
    };
  };
  themes: { title: string };
}
