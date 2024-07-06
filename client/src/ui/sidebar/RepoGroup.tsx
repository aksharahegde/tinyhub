import {REPO_GROUP_INDEX} from './RepoGroups';
import React from 'react';
import {RepoLink} from './RepoLink';
import {useSliceRowIds} from 'tinybase/ui-react';

export const RepoGroup = ({
  group,
  currentRepoId,
}: {
  readonly group: string;
  readonly currentRepoId: string;
}) => {
  const repoIds = useSliceRowIds(REPO_GROUP_INDEX, group);
  return (
    <li>
      <details open>
        <summary>{group}</summary>
        <ul className="navList">
          {repoIds.map((repoId) => (
            <RepoLink
              repoId={repoId}
              isCurrent={repoId == currentRepoId}
              key={repoId}
            />
          ))}
        </ul>
      </details>
    </li>
  );
};
