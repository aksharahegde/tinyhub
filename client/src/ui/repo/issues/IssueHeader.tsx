import {
  ISSUES_CREATED_AT_CELL,
  ISSUES_IS_PULL_REQUEST_CELL,
  ISSUES_TITLE_CELL,
  ISSUES_UPDATED_AT_CELL,
  useIssueCell,
} from '../../../stores/IssuesStore';
import {ISSUE_ID_VALUE, UI_STORE} from '../../../stores/UiStore';
import React from 'react';
import {formatDate} from '../../common/common';
import {useValue} from 'tinybase/ui-react';

export const IssueHeader = () => {
  const issueId = (useValue(ISSUE_ID_VALUE, UI_STORE) as string) ?? '';

  return (
    <header id="issueHeader">
      <h1>
        {useIssueCell(issueId, ISSUES_TITLE_CELL)}
        {useIssueCell(issueId, ISSUES_IS_PULL_REQUEST_CELL) ? (
          <span className="meta pr">pull request</span>
        ) : (
          <span className="meta issue">issue</span>
        )}
      </h1>
      <p>
        Created {formatDate(useIssueCell(issueId, ISSUES_CREATED_AT_CELL))},
        updated {formatDate(useIssueCell(issueId, ISSUES_UPDATED_AT_CELL))}.
      </p>
    </header>
  );
};
