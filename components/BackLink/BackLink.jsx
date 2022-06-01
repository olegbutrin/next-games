import { useCallback } from "react";
import { useRouter } from "next/router";
import { string } from "prop-types";
import styled from "styled-components";

const BackLinkPad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
`;

const BackLinkButton = styled.div`
  display: inline-block;
  padding: ${(props) => props.theme.sizes.itemSize};
  padding-left: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  padding-right: ${(props) => props.theme.sizes.itemSizeNum * 2 + "px"};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  gap: ${(props) => props.theme.sizes.itemSize};
  text-decoration: none;
  cursor: pointer;
`;

const BackLink = ({ slug }) => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <BackLinkPad>
      <BackLinkButton onClick={goBack}>Back</BackLinkButton>
    </BackLinkPad>
  );
};

BackLink.propTypes = {
  slug: string.isRequired,
};

export default BackLink;
