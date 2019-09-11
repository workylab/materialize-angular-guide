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
      glossary: string;
      htmlVisualizer: string;
      list: string;
      listItem: string;
      modal: string;
      scrollSpy: string;
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
      formPrefix: string;
      input: string;
      label: string;
      message: string;
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
      navbar: string;
      tab: string;
    };
  };
  themes: { title: string };
}
