import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

export const Navigation = (props) => {
  const { user } = props;
  const router = useRouter();

  const onSignOut = async () => {
    //TODO ts-ignoreなくす
    //@ts-ignore
    const data: any = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  if (!user) return <Avatar />;

  return (
    <Menu>
      <MenuButton as={Avatar} cursor="pointer" src={user.image} name={user.name} />
      <MenuList>
        <MenuItem onClick={onSignOut}>signout</MenuItem>
      </MenuList>
    </Menu>
  );
};
