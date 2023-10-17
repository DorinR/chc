import { useIntl } from "react-intl";

export const Project4 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "projects4" }) }}
    ></div>
  );
};
