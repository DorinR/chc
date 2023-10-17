import { useIntl } from "react-intl";

export const About3 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "about3" }) }}
    ></div>
  );
};
