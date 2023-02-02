import styled from "styled-components";
import { HBox } from "styles/HBox";
import { H1, H2, P } from "styles/Text";
import { VBox } from "styles/VBox";

const StyledHBox = styled(HBox)``;

type Props = {
  year: string;
  label: string;
  desc: string;
};
const ProjectPill = ({ year, label, desc }: Props) => {
  return (
    <StyledHBox style={{ flexWrap: "nowrap", gap: "3rem" }}>
      <H1
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontWeight: "200",
          borderLeft: "4px solid blue",
          width: "fit-content",
          padding: "20px 0",
        }}
      >
        {year}
      </H1>
      <VBox style={{ textAlignLast: "start" }}>
        <H1 style={{ fontWeight: "500" }}>{label}</H1>
        <P>{desc}</P>
      </VBox>
    </StyledHBox>
  );
};

export default ProjectPill;
