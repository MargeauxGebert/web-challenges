import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes() {
  return (
    <Wrapper>
      <VolumesTitle>
        The Lord <br /> of the Rings
      </VolumesTitle>
      <VolumesBody>{introduction}</VolumesBody>
      <VolumesTitleTwo>All Volumes</VolumesTitleTwo>
      <VolumesList>
        {volumes.map((volume) => (
          <VolumesListItem key={volume.id}>
            <VolumesListLink href={`/volumes/${volume.slug}`}>
              <BookCover
                src={volume.cover}
                alt={`Cover of ${volume.title}`}
                width="90"
                height="140"
              />

              {volume.title}
            </VolumesListLink>
          </VolumesListItem>
        ))}
      </VolumesList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 1.5rem;
  color: var(--color-earth);
`;

const VolumesTitle = styled.h1`
  font: var(--font-headline-1);
`;

const VolumesBody = styled.p`
  font: var(--font-body);
  margin-bottom: 3rem;
`;

const VolumesTitleTwo = styled.h2`
  font: var(--font-headline-2);
`;

const VolumesList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const VolumesListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const VolumesListLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 90px;
  gap: 0.5rem;
  text-decoration: none;
  font: var(--font-caption);
  color: var(--color-earth);
`;

const BookCover = styled(Image)`
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;