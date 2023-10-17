import { useIntl } from "react-intl";

export const Project3 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "projects3" }) }}
    ></div>
  );
};
