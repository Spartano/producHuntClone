import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withList } from 'meteor/vulcan:core';
import { Posts } from '../../modules/posts/index.js';
import classNames from 'classnames';

const PostsDay = ({className, date, changeLimit, results, loading, count, totalCount, loadMore, showHeader = true, showLoadMore = true, networkStatus, currentUser, error, terms}) => {

  const loadingMore = networkStatus === 2;

  if (results && results.length) {

    const hasMore = totalCount > results.length;
   
    return (
      <div className={classNames(className, 'posts-list', `posts-list-${terms.view}`)}>
        {error ? <Error error={Utils.decodeIntlError(error)} /> : null }
        <div className="posts-day">
        <h4 className="posts-day-heading">{date.format('dddd, MMMM Do YYYY')}</h4>
          {results.map(post => <Components.PostsItem post={post} key={post._id} currentUser={currentUser} terms={terms} />)}
         <button onClick={() => loadMore({limit: 10})}>Click Me</button>
        </div>
        {showLoadMore ? 
          hasMore ? 
            <Components.PostsLoadMore loading={loadingMore} loadMore={loadMore} count={count} totalCount={totalCount} /> : 
            <Components.PostsNoMore/> : 
          null
        }
      </div>
    )
  } else if (loading) {
    return (
      <div className={classNames(className, 'posts-list')}>
        {error ? <Error error={Utils.decodeIntlError(error)} /> : null }
        <div className="posts-list-content">
          <Components.PostsLoading/>
        </div>
      </div>
    )
  } else {
    return (
      <div className={classNames(className, 'posts-list')}>
        {error ? <Error error={Utils.decodeIntlError(error)} /> : null }
        <div className="posts-list-content">
          <Components.PostsNoResults/>
        </div>
      </div>
    )  
  }
  
};
PostsDay.propTypes = {
  currentUser: PropTypes.object,
  date: PropTypes.object,
  number: PropTypes.number
};

const options = {
  collection: Posts,
  queryName: 'postsDailyListQuery',
  fragmentName: 'PostsList',
  limit: 0,
};

registerComponent('PostsDay', PostsDay,  [withList, options]);
