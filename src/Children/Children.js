import { useEffect } from 'react';
import { childrenQuery } from '../graphQL/queries/GetChildren';
import { useQuery } from "@apollo/client";
import ChildCard from '../ChildCard/ChildCard';

const Children = ({ children, setChildren, userId }) => {

  const { data } = useQuery(childrenQuery, {
    variables: {
      userId
    }
  });

  useEffect(() => {
    if (data) {
      setChildren(data.children)
    }
  }, [data, setChildren])

  const childrenCards = children.map((elem, i) => {
    let uniqueKey = Math.random();
      return (
        <div key={Math.random()}>
          <ChildCard
          id={elem.id}
          key={uniqueKey}
          firstName={elem.firstName}
          lastName={elem.lastName}
          />
        </div>
      )
    })

  return (
    <div>
      {childrenCards}
    </div>
  )
}

export default Children;
