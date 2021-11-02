import {Route} from "@react-navigation/routers/src/types";
import {ParamListBase, PartialState} from "@react-navigation/routers";
import {PrivateValueStore} from "@react-navigation/core/lib/typescript/src/types";

export interface ScreenProps<T extends object | undefined> {
    navigation: {
        dispatch(action: Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }> | ((state: Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>) => Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }>)): void;
        navigate<RouteName extends string>(...args: [screen: RouteName] | [screen: RouteName, params: object | undefined]): void;
        navigate<RouteName_1 extends string>(options: {
            key: string;
            params?: object | undefined;
            merge?: boolean | undefined;
        } | {
            name: RouteName_1;
            key?: string | undefined;
            params: object | undefined;
            merge?: boolean | undefined;
        }): void;
        reset(state: Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }> | PartialState<Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>>): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        getParent<T = import("@react-navigation/core/src/types").NavigationProp<ParamListBase, string, Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, {}, {}> | undefined>(): T;
        getState(): Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>;
    } & PrivateValueStore<ParamListBase, string, {}>  & {
        setParams<RouteName_2 extends string>(params: Partial<object | undefined>): void;
    } & {
        dispatch(action: Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }> | ((state: any) => Readonly<{
            type: string;
            payload?: object | undefined;
            source?: string | undefined;
            target?: string | undefined;
        }>)): void;
        navigate<RouteName extends string>(...args: [screen: RouteName] | [screen: RouteName, params: object | undefined]): void;
        navigate<RouteName_1 extends string>(options: {
            key: string;
            params?: object | undefined;
            merge?: boolean | undefined;
        } | {
            name: RouteName_1;
            key?: string | undefined;
            params: object | undefined;
            merge?: boolean | undefined;
        }): void;
        reset(state: any): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
        getParent<T = import("@react-navigation/core/src/types").NavigationProp<ParamListBase, string, Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[] | undefined;
            routes: (Readonly<{
                key: string;
                name: string;
                path?: string | undefined;
            }> & Readonly<{
                params?: Readonly<object | undefined>;
            }> & {
                state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
            })[];
            type: string;
            stale: false;
        }>, {}, {}> | undefined>(): T;
        getState(): any;
    } & {
        setParams(params: Partial<object | undefined>): void;
        setOptions(options: Partial<any>): void;
    } & import("@react-navigation/core/src/types").EventConsumer<any> & PrivateValueStore<ParamListBase, string, any>;
    route: Route<string, T>
}
