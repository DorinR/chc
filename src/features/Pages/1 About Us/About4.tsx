import { useIntl } from "react-intl";

export const About4 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "about4" }) }}
    ></div>
  );
};
