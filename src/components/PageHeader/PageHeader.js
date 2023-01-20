import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Envizi ESG Suite">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          Envizi ESG Suite
        </HeaderName>
        <HeaderNavigation aria-label="Envizi ESG Suite">
          <HeaderMenuItem element={Link} to="/repos">
            Manage
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            Verify
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            Monitor
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            Optimize
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            Report
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/repos">
            Admin
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Manage</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Verify</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Monitor</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Optimize</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Report</HeaderMenuItem>
              <HeaderMenuItem href="/repos">Admin</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="App Switcher"
            tooltipAlignment="center">
            <Switcher size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="end">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default PageHeader;
