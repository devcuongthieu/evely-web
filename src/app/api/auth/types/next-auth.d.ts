import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      refresh_token: string;
      access_token: string;
      role: string;
    };
  }

  interface User extends DefaultUser {
    refresh_token: string;
    access_token: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    refresh_token: string;
    access_token: string;
    role: string;
  }
}
