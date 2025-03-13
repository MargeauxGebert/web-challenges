import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";
import ChevronLeft from "../../public/icons/chevron-left.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import ArrowLeft from "../../public/icons/arrow-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <Wrapper>
      <StyledLink href="/volumes">
        <ChevronLeft />
        All Volumes
      </StyledLink>
      <VolumeTitle>{title}</VolumeTitle>
      <BookDescription>{description}</BookDescription>
      <BookListWrapper $color={color}>
        <BookList>
          {books.map(({ ordinal, title }) => (
            <BookListCaption key={title}>
              {ordinal}:<br /> <BookListTitle>{title}</BookListTitle>
            </BookListCaption>
          ))}
        </BookList>
        <BookCover
          priority
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </BookListWrapper>
      {previousVolume ? (
        <div>
          <StyledLinkPrev href={`/volumes/${previousVolume.slug}`}>
            <ArrowLeft /> <LinkTextPrev>Previous Volume:{" "}
            <StyledLinkTitle> {previousVolume.title} </StyledLinkTitle></LinkTextPrev>
          </StyledLinkPrev>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLinkNext href={`/volumes/${nextVolume.slug}`}>
            <LinkTextNext>
              Next Volume: <StyledLinkTitle>{nextVolume.title}</StyledLinkTitle>
            </LinkTextNext>{" "}
            <ArrowRight />
          </StyledLinkNext>
        </div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 1.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-earth);
  &:hover {
    color: var(--color-hover);
  }
`;

const VolumeTitle = styled.h1`
  font: var(--font-headline-1);
`;

const BookDescription = styled.p`
  font: var(--font-body);
  margin-bottom: 2rem;
`;

const BookListWrapper = styled.div`
  background-color: ${({ $color }) => $color};
  display: flex;
  height: 280px;
  align-items: center;
  margin-inline: -1.5rem;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`;

const BookListCaption = styled.li`
  list-style: none;
  color: var(--color-clouds);
  font: var(--font-caption--italic);
`;

const BookListTitle = styled.strong`
  font: var(--font-title);
  margin-bottom: 1rem;
`;

const BookCover = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledLinkNext = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  text-decoration: none;
  color: var(--color-earth);
  &:hover {
    color: var(--color-hover);
  }
  font: var(--font-caption--italic);
`;

const StyledLinkPrev = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  text-decoration: none;
  color: var(--color-earth);
  &:hover {
    color: var(--color-hover);
  }
  font: var(--font-caption--italic);
`;
const LinkTextNext = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const LinkTextPrev = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledLinkTitle = styled.p`
  font: var(--font-caption);
  margin: 0;
`;
