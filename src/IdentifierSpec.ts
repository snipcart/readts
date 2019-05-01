// Copyright (c) 2016- readts authors, see AUTHORS.
// Released under the MIT license, see LICENSE.

import * as ts from 'typescript';
import * as readts from './index';

import { SymbolSpec } from './Parser';

/** Property, function / method parameter or variable. */

export class IdentifierSpec {

	/** @ignore internal use.
	  * @param type Type definition.
	  * @param optional Interface members and function / method parameters may be optional. */

	constructor(spec: SymbolSpec, public type: readts.TypeSpec | undefined, public optional: boolean) {
		this.name = spec.name;
		if(type) this.value = type.value;
		this.pos = spec.pos;
		if(spec.doc) this.doc = spec.doc;
	}

	addDecorator(decorator: string) {
		if(!this.decoratorList) this.decoratorList = [];

		this.decoratorList.push(decorator);
	}

	/** Identifier name. */
	name: string;
	pos?: readts.SourcePos;
	/** Literal type value */
	value?: any;
	/** JSDoc comment. */
	doc?: string;
	decoratorList: string[];
}
