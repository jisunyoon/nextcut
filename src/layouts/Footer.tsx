import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const Wrapper = styled.footer`
    border-top: 1px solid ${theme.colors.divider};
    padding: ${theme.spacing.xl} ${theme.spacing.layout.pagePadding};
    background: ${theme.colors.bgSecondary};
    display: flex;
    justify-content: center;
`;

const Inner = styled.div`
    max-width: 75rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.md};
    flex-wrap: wrap;
`;

const Copy = styled.span`
    font-size: ${theme.typography.fontSize.xs};
    color: ${theme.colors.textTertiary};
`;

const Links = styled.nav`
    display: flex;
    gap: ${theme.spacing.lg};
    a {
        font-size: ${theme.typography.fontSize.xs};
        color: ${theme.colors.textSecondary};
        text-decoration: none;
        &:hover { color: ${theme.colors.primary}; }
    }
`;

export function Footer(){
    return (
        <Wrapper>
            <Inner>
                <Copy>© 2026 NextCut. All rights reserved.</Copy>
                <Links>
                    <a href="#">이용약관</a>
                    <a href="#">개인정보처리방침</a>
                </Links>
            </Inner>
        </Wrapper>
    )
}
