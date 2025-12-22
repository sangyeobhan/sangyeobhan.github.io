import React, {memo} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {groupBlogSidebarItemsByYear} from '@docusaurus/plugin-content-blog/client';
import {groupBy} from '@docusaurus/theme-common';
import {format, parseISO, isValid} from 'date-fns';
import Heading from '@theme/Heading';

// 월별 그룹화 함수 추가 (연도 내 아이템들을 월별로 그룹화)
function groupBlogSidebarItemsByMonth(items) {
  const groupedByMonth = groupBy(items, (item) => {
    try {
      const date =
        typeof item.date === 'string'
          ? parseISO(item.date)
          : new Date(item.date);

      if (!isValid(date)) {
        return '날짜 미상';
      }

      // "M월" 형식으로 반환 (1월, 2월, ..., 12월)
      return format(date, 'M월');
    } catch (error) {
      return '날짜 미상';
    }
  });

  const entries = Object.entries(groupedByMonth);

  // 월 순서로 정렬 (12월 → 1월)
  entries.sort((a, b) => {
    if (a[0] === '날짜 미상') return 1;
    if (b[0] === '날짜 미상') return -1;

    // "12월" → 12 추출
    const monthA = parseInt(a[0].replace('월', ''));
    const monthB = parseInt(b[0].replace('월', ''));

    return monthB - monthA; // 내림차순
  });

  return entries;
}

// 월 그룹 컴포넌트 추가 (연도 그룹 내부에 중첩)
function BlogSidebarMonthGroup({month, children}) {
  return (
    <div role="group" style={{marginLeft: '1rem'}}>
      <Heading
        as="h4"
        style={{
          fontSize: '0.9rem',
          marginTop: '0.5rem',
          marginBottom: '0.3rem',
        }}>
        {month}
      </Heading>
      {children}
    </div>
  );
}

// 연도 그룹 컴포넌트 (기존과 동일)
function BlogSidebarYearGroup({year, yearGroupHeadingClassName, children}) {
  return (
    <div role="group">
      <Heading as="h3" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({items, yearGroupHeadingClassName, ListComponent}) {
  const themeConfig = useThemeConfig();

  if (themeConfig.blog.sidebar.groupByYear) {
    // 1단계: 연도별 그룹화
    const itemsByYear = groupBlogSidebarItemsByYear(items);

    return (
      <>
        {itemsByYear.map(([year, yearItems]) => (
          <BlogSidebarYearGroup
            key={year}
            year={year}
            yearGroupHeadingClassName={yearGroupHeadingClassName}>
            {/* 2단계: 각 연도 내에서 월별 그룹화 */}
            {groupBlogSidebarItemsByMonth(yearItems).map(
              ([month, monthItems]) => (
                <BlogSidebarMonthGroup key={month} month={month}>
                  <ListComponent items={monthItems} />
                </BlogSidebarMonthGroup>
              )
            )}
          </BlogSidebarYearGroup>
        ))}
      </>
    );
  } else {
    return <ListComponent items={items} />;
  }
}

export default memo(BlogSidebarContent);
