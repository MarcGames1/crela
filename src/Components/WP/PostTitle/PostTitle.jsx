import { Heading } from '../Heading/Heading';
import { usePostContext } from '../../../context/postContext';

export const PostTitle = ({ level, textAlign }) => {
  const { title } = usePostContext();

  return <Heading content={title} level={level} textAlign={textAlign} />;
};
