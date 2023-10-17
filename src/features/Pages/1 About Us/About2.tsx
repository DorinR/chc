import { useIntl } from "react-intl";

export const About2 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "about2" }) }}
    ></div>
  );
};
