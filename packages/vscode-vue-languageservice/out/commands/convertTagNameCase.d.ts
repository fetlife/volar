import * as vscode from 'vscode-languageserver';
import type { ApiLanguageServiceContext } from '../types';
export declare function register(context: ApiLanguageServiceContext): (connection: vscode.Connection, { sourceFiles }: ApiLanguageServiceContext, uri: string, mode: 'kebab' | 'pascal') => Promise<void>;
