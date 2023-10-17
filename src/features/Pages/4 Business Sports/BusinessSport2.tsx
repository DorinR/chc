import { useIntl } from "react-intl";

export const Social2 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formatMessage({ id: "businessSports2" }),
      }}
    ></div>
  );
};
