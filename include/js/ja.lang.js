/*********************************************************************************

** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ********************************************************************************/
/*********************************************************************************
 * Description:  Defines the Japanese language pack
 * Contributor:  H.Hokawa <hhokawa @nospam@ gmail.com>
 ********************************************************************************/

 
	var alert_arr = {       DELETE:'選択したレコードを削除しますか？ ',
                                RECORDS:'レコード ',
                                SELECT:'少なくとも 1 つの要素を選択してください',
				SELECTED:'選択した ',
                                DELETE_ACCOUNT:'この顧客企業を削除すると、関連する案件と見積りも削除されます。 選択した ',
                                DELETE_VENDOR:'この納入業者を削除すると、関連する購買発注も削除されます。 選択した ',
                                SELECT_MAILID:'メール ID を選択してください',
                                OVERWRITE_EXISTING_ACCOUNT1:'既存住所を顧客企業 (',
                                OVERWRITE_EXISTING_ACCOUNT2:') の住所の詳細で上書きしますか？',
				                OVERWRITE_EXISTING_CONTACT1:'既存住所を顧客担当者 (',
                                OVERWRITE_EXISTING_CONTACT2:') の住所の詳細で上書きしますか？',
                                MISSING_FIELDS:'必須フィールドが見つかりません：',
                                NOT_ALLOWED_TO_EDIT:'このフィールドの編集は許可されていません',
                                NOT_ALLOWED_TO_EDIT_FIELDS:'フィールドの編集は許可されていません',
                                COLUMNS_CANNOT_BE_EMPTY:'選択したカラムは空にできません',
                                CANNOT_BE_EMPTY:' は空にできません',
                                CANNOT_BE_NONE:' を設定してください',
                                ENTER_VALID:'有効値を入力してください： ',
                                SHOULDBE_LESS:' は次の値より小さい必要があります： ',
                                SHOULDBE_LESS_EQUAL:' は次の値以下である必要があります： ',
                                SHOULDBE_EQUAL:' は次の値に等しい必要があります： ',
                                SHOULDBE_GREATER:' は次の値より大きい必要があります： ',
                                SHOULDBE_GREATER_EQUAL:' は次の値以上の必要があります： ',
                                INVALID:'不正 ',
                                EXCEEDS_MAX:' は最大値を超えました ',
                                OUT_OF_RANGE:' は範囲外です',
                                SHOULDNOTBE_EQUAL:' は次と異なる必要があります： ',
                                PORTAL_PROVIDE_EMAILID:'ポータル ユーザーを有効にするには、正しい電子メール ID を提供してください',
                                ADD_CONFIRMATION:' を追加しますか？ ',
                                ACCOUNTNAME_CANNOT_EMPTY:'顧客企業名は空にできません',
                                CANT_SELECT_CONTACTS:"見込み客から関連した顧客担当者を選択できません",
                                LBL_THIS:'この ',
                                DOESNOT_HAVE_MAILIDS:" にメール ID がありません",
                                ARE_YOU_SURE:'よろしいですか？',
                                DOESNOT_HAVE_AN_MAILID:"\" に E メール ID がありません",
                                MISSING_REQUIRED_FIELDS:'必須フィールドが見つかりません： ',
                                READONLY:"読み取り専用です",
				SELECT_ATLEAST_ONE_USER:'少なくとも 1 つのユーザーを選択してください',
                                DISABLE_SHARING_CONFIRMATION:'選択の共有を無効にしますか？ ',
                                USERS:' ユーザー？',
                                ENDTIME_GREATER_THAN_STARTTIME:'終了時間は開始時間より後である必要があります ',
                                FOLLOWUPTIME_GREATER_THAN_STARTTIME:'後続の時間は開始時間より後である必要があります ',
                                MISSING_EVENT_NAME:'活動名がありません',
                                EVENT_TYPE_NOT_SELECTED:'活動タイプが選択されていません',
                                CLOSEDATE_CANNOT_BE_EMPTY:'完了日フィールドは空にできません',
                                SITEURL_CANNOT_BE_EMPTY:'サイトの URL は空にできません',
                                SITENAME_CANNOT_BE_EMPTY:'サイト名は空にできません',
                                LISTPRICE_CANNOT_BE_EMPTY:'定価は空にできません',
                                INVALID_LIST_PRICE:'不正な定価です',
                                PROBLEM_ACCESSSING_URL:'アクセス URL に問題があります： ',
                                CODE:' コード： ',
                                WISH_TO_QUALIFY_MAIL_AS_CONTACT:'このメールを顧客担当者として認定しますか？',
                                SELECT_ATLEAST_ONEMSG_TO_DEL:'削除するメッセージを少なくとも一つ選択してください',
                                ERROR:'エラー',
                                FIELD_TYPE_NOT_SELECTED:'フィールド タイプが選択されていません',
                                SPECIAL_CHARACTERS_NOT_ALLOWED:'特殊文字はラベル フィールドで使用できません',
				SPECIAL_CHARACTERS:'特殊文字',
                                NOT_ALLOWED:'は許可されません。 他の値を試してください',
                                PICKLIST_CANNOT_BE_EMPTY:'定義リストの値は空にできません',
                                DUPLICATE_VALUES_FOUND:'重複した値が見つかりました',
                                DUPLICATE_MAPPING_ACCOUNTS:'顧客企業に重複したマッピングがあります。',
                                DUPLICATE_MAPPING_CONTACTS:'顧客担当者に重複したマッピングがあります。',
                                DUPLICATE_MAPPING_POTENTIAL:'案件に重複したマッピングがあります。',
                                ERROR_WHILE_EDITING:'編集中にエラーが発生しました：',
                                CURRENCY_CHANGE_INFO:'通貨変更は正しく実施されました',
                                CURRENCY_CONVERSION_INFO:'Dollar $ を通貨として使用していますか？ \n $ を維持するには [OK] をクリックしてください。通貨換算レートを変更するには [キャンセル] をクリックしてください。',
                                THE_EMAILID: "電子メール ID \'",
                                EMAIL_FIELD_INVALID:"\' (電子メール フィールド) が不正です",
                                MISSING_REPORT_NAME:'レポート名がありません',
                                REPORT_NAME_EXISTS:'レポート名は既に存在します。やり直してください...',
                                WANT_TO_CHANGE_CONTACT_ADDR:'この顧客企業に関連する顧客担当者の住所を変更しますか？',
                                SURE_TO_DELETE:'削除しますか？',
				NO_PRODUCT_SELECTED:'製品が選択されていません。 少なくとも 1 つの製品を選択してください。',
                                VALID_FINAL_PERCENT:'正しい総割引率 (%) を入力してください',
                                VALID_FINAL_AMOUNT:'正しい総割引額を入力してください',
                                VALID_SHIPPING_CHARGE:'正しい発送 & 取扱手数料を入力してください',
                                VALID_ADJUSTMENT:'正しい調整を入力してください',
                                WANT_TO_CONTINUE:'続行しますか？',
                                ENTER_VALID_TAX:'正しい税額を入力してください',
                                VALID_TAX_NAME:'正しい税名を入力してください',
                                CORRECT_TAX_VALUE:'正しい税額を入力してください',
                                ENTER_POSITIVE_VALUE:'正の値を入力してください',
                                LABEL_SHOULDNOT_EMPTY:'税ラベル名は空にできません',
                                NOT_VALID_ENTRY:'は正しい入力ではありません。 正しい値を入力してください',
                                VALID_DISCOUNT_PERCENT:'正しい割引率を入力してください',
                                VALID_DISCOUNT_AMOUNT:'正しい割引額を入力してください',
                                SELECT_TEMPLATE_TO_MERGE:'マージ用のテンプレートを選択してください',
				SELECTED_MORE_THAN_ONCE:'次のアイテムを複数回選択しました。',
				YES:'はい',
                                NO:'いいえ',
                                MAIL:'メール',
				EQUALS:'等しい',
				NOT_EQUALS_TO:'等しくない',
				STARTS_WITH:'文頭一致',
				CONTAINS:'含む',	
				DOES_NOT_CONTAINS:'含まない',
				LESS_THAN:'より小さい',
				GREATER_THAN:'より大きい',
				LESS_OR_EQUALS:'以下',
				GREATER_OR_EQUALS:'以上',

				NO_SPECIAL_CHARS:'特殊文字は請求書文字列で使用できません',
				PLS_SELECT_VALID_FILE:'次の拡張子のファイルを選択してください：\n',
                                NO_SPECIAL:'特殊文字は許可されません',
				NO_QUOTES:'引用符 ( \' " ) および + 記号は使用できません ',
				IN_PROFILENAME:' ( プロファイル名 )',
				IN_GROUPNAME:' ( グループ名 )',
				IN_ROLENAME:' ( 役割名 )',
                                VALID_TAX_PERCENT:'正しい税率 (%) を入力してください',
                                VALID_SH_TAX:'送料と取扱手数料向けに正しい税率を入力してください ',
				ROLE_DRAG_ERR_MSG:'親ノードを子ノードの下に移動することはできません',
				LBL_DEL:'削除',
				VALID_DATA :' 正しい日付を入力して、再び実行してください... ',
                                STDFILTER : '標準フィルタ',
                                STARTDATE : '開始日',
                                ENDDATE : '終了日',
                                START_DATE_TIME : '開始日時',
                                START_TIME : '開始時間',
                                DATE_SHOULDNOT_PAST :'$$$計画済みステータスの活動に対して現在の日付 & 時刻',
                                TIME_SHOULDNOT_PAST :'$$$計画済みステータスの活動に対して現在の時刻',
				LBL_AND : 'と',
				LBL_ENTER_VALID_PORT: '正しいポート番号を入力してください',
				IN_USERNAME :' ( ユーザー名 ) ',
				LBL_ENTER_VALID_NO: '正しい番号を入力してください',
				LBL_PROVIDE_YES_NO: ' 不正な値です。\n[はい] または [いいえ] を指定してください',
				LBL_SELECT_CRITERIA: ' 不正な条件です。\n条件を選択してください',
    // Added/Updated for vtiger CRM 5.0.4
				OPPORTUNITYNAME_CANNOT_BE_EMPTY:'案件名フィールドは空にできません',
                		OVERWRITE_EXISTING_ACCOUNT1:'既存住所を顧客企業 (',
                		NAME_DESC:'  ( フォルダ名 & 説明 )',
                		ENDS_WITH:'文末一致',
                		SHARED_EVENT_DEL_MSG:'共有された活動を編集/削除する権限がありません。',
                                                                                                                             

				LBL_WRONG_IMAGE_TYPE: '顧客担当者の対応ファイル タイプ - jpeg、png、jpg、pjpeg、x-png、gif',
				SELECT_MAIL_MOVE: 'メールを選択して移動してください..',
    
				LBL_NOTSEARCH_WITHSEARCH_ALL:'検索を使用しませんでした。 すべてのレコードがエクスポートされます： ',
				LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE:'何も検索しませんでした。 しかし検索 & 現在のページおオプションが選択されました。 そのため現在のページのレコードがエクスポートされます： ',
				LBL_NO_DATA_SELECTED:'レコードが選択されませんでした。 エクスポートするレコードを少なくとも 1 つ選択してください',
				LBL_SEARCH_WITHOUTSEARCH_ALL:'検索オプションを使用しましたが、検索なし & すべてのオプションを選択しました。\n[ OK ] をクリックしてすべてのデータをエクスポートするか、[ キャンセル ] をクリックして再び他のエクスポート条件を試すことができます。',
				STOCK_IS_NOT_ENOUGH : '在庫不足です',
				INVALID_QTY : '数量が不正です',
				LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE:'検索オプションを使用しましたが、検索なし & 現在のページのオプションを選択しました。\n[ OK ] をクリックして現在のページのデータをエクスポートするか、[ キャンセル ] をクリックして再び他のエクスポート条件を試すことができます。',
				LBL_SELECT_COLUMN: ' 不正なカラムです。\nカラムを選択してください',
				LBL_NOT_ACCESSIBLE : '$$$アクセス不能',
				LBL_FILENAME_LENGTH_EXCEED_ERR: 'ファイル名は 255 文字を超えることはできません',
				LBL_DONT_HAVE_EMAIL_PERMISSION : "電子メール フィールドの権限がないため、電子メール ID を選ぶことはできません",
				LBL_NO_FEEDS_SELECTED: 'フィードが未選択です',
				LBL_SELECT_PICKLIST:'削除する値を少なくとも 1 つ選択してください。',
				LBL_CANT_REMOVE:'すべての値を削除することはできません',

    // Added after 5.0.4 GA
    
    /*For global add/delete in picklist*/
				LBL_GIVE_PICKLIST_VALUE:'選択した定義リストを置換する値を提供してください',
				LBL_SELECT_ROLE:'新しい値を追加する役割を少なくとも一つ選択してください',
				LBL_ADD_PICKLIST_VALUE:'追加する新しい値を少なくとも一つ提供してください',
				LBL_NO_VALUES_TO_DELETE: "削除する値がありません",

                /* For Duplicate merging feature */
				SAME_GROUPS: 'マージするには同じグループのレコードを選択する必要があります',
				ATLEAST_TWO: 'マージするには少なくとも 2 つのレコードを選択します',
				MAX_THREE: '最大 3 つのレコードを選択できます',
				//PARENT_RECORD: 'レコードを親レコードとして選択します',  MergeFields.tpl Line:59
				MAX_RECORDS: '最大 4 つのレコードを選択できます',
				CON_MANDATORY: '必須フィールドである姓を選択します',
				LE_MANDATORY: '必須フィールドである名と会社を選択します',
				ACC_MANDATORY: '必須フィールドである顧客企業名を選択します',
				PRO_MANDATORY: '必須フィールドである製品名を選択します',
				TIC_MANDATORY: '必須フィールドである問題報告タイトルを選択します',
				POTEN_MANDATORY: '必須フィールドである案件名を選択します',
				VEN_MANDATORY: '必須フィールドである納入業者名を選択します',
				DEL_MANDATORY: '必須フィールドの削除は許可されていません',
    
    /* For Multi-Currency Support */
				MSG_CHANGE_CURRENCY_REVISE_UNIT_PRICE: 'すべての通貨の単価は、選択した通貨に基づいて改定されます。 問題ありませんか？',
    
				Select_one_record_as_parent_record : 'レコードを親レコードとして選択します',
				RECURRING_FREQUENCY_NOT_PROVIDED : '繰り返し周期は提供されません',
				RECURRING_FREQNECY_NOT_ENABLED : '繰り返し周期は提供されましたが、繰り返しが有効ではありません',
    /* Added for Documents module */
				NO_SPECIAL_CHARS_DOCS:'引用符、バックスラッシュ、+ 符号、% および ? は使用できません',
				FOLDER_NAME_TOO_LONG:'フォルダ名が長すぎます。やり直してください。',
				FOLDERNAME_EMPTY:'フォルダ名は空にできません',
				DUPLICATE_FOLDER_NAME:'既存のフォルダ名を複製しようとしています。 やり直してください。',
				FOLDER_DESCRIPTION_TOO_LONG:'フォルダの説明が長すぎます。やり直してください。',
				NOT_PERMITTED:"この操作の実行は許可されていません。",		
    
				ALL_FILTER_CREATION_DENIED:'「All」 の名前を使用してフィルタ表示を作成することはできません。異なる表示名を試してください',
				OPERATION_DENIED:'この操作の実行は許可されていません',
				EMAIL_CHECK_MSG: '電子メール フィールドをブランクにするにはポータル アクセスを無効にします',
				IS_PARENT : 'この製品には部分製品があり、この製品の親を選ぶことはできません',
    
    /*global actions on picklist*/
				PICKLIST_CANNOT_BE_EMPTY: '定義リストの値は空にできません',
				DUPLICATE_VALUES_FOUND: '重複した値が見つかりました',
				LBL_NO_ROLES_SELECTED: '役割を選択していません。継続しますか？',
				LBL_DUPLICATE_FOUND: '値に重複したエントリが見つかりました ',
				LBL_CANNOT_HAVE_EMPTY_VALUE: '空の値で置換はできません。値を削除するには削除オプションを使用します。',
				LBL_DUPLICATE_VALUE_EXISTS: '重複した値が存在します',
				LBL_WANT_TO_DELETE: "これによりすべての役割に対して選択した定義リスト値を削除します。 継続しますか？ ",
				LBL_DELETE_ALL_WARNING: "定義リストでは少なくとも一つの値が必要です",
				LBL_PLEASE_CHANGE_REPLACEMENT: "$$$置換値を変更してください。削除用にも選択されました",
    
    /*layout Editor changes*/
				BLOCK_NAME_CANNOT_BE_BLANK : 'ブロック名は空にできません',
				ARE_YOU_SURE_YOU_WANT_TO_DELETE : '削除しますか？',
				PLEASE_MOVE_THE_FIELDS_TO_ANOTHER_BLOCK : 'フィールドを他のブロックに移動してください',
				ARE_YOU_SURE_YOU_WANT_TO_DELETE_BLOCK : 'ブロックを削除しますか？',
				LABEL_CANNOT_NOT_EMPTY : 'ラベルは空にできません',
				LBL_TYPEALERT_1 : '申し訳ございません。',
				LBL_WITH : ' は ',
				LBL_TYPEALERT_2 : ' データ タイプとマップできません。 同じデータ タイプとマップしてください。',
				LBL_LENGTHALERT : '申し訳ございません。異なる文字数のフィールドをマップできません。 同一またはより大きな文字数のデータとマップしてください。',
				LBL_DECIMALALERT : '申し訳ございません。異なる小数点位置のフィールドをマップできません。 同一またはより大きな小数点位置のデータとマップしてください。',
				FIELD_IS_MANDATORY : '必須フィールド',
				FIELD_IS_ACTIVE : 'フィールドを使用可能',
				FIELD_IN_QCREATE : 'クイック作成に存在',
				FIELD_IS_MASSEDITABLE : '一括編集に利用可能',	
     
				IS_MANDATORY_FIELD : 'は必須フィールドです',
				CLOSEDATE_CANNOT_BE_EMPTY : '完了日は空にできません',
				AMOUNT_CANNOT_BE_EMPTY : '$$$総額は空にできません',
				ARE_YOU_SURE : '削除しますか？',
				LABEL_ALREADY_EXISTS : 'ラベルは既に存在します。 異なるラベルを指定してください',
				LENGTH_OUT_OF_RANGE : 'ブロックの長さは 50 文字以下である必要があります',
				LBL_SELECT_ONE_FILE : '少なくとも一つのファイルを選択してください',
				LBL_UNABLE_TO_ADD_FOLDER : 'フォルダを追加できません。 やり直してください。',
				LBL_ARE_YOU_SURE_YOU_WANT_TO_DELETE_FOLDER : 'フォルダを削除しますか？',
				LBL_ERROR_WHILE_DELETING_FOLDER : 'フォルダ削除時にエラーが発生しました。後ほど再試行してください。',
				LBL_FILE_CAN_BE_DOWNLOAD : 'ファイルをダウンロードできます',
				LBL_DOCUMENT_LOST_INTEGRITY:'このドキュメントは利用できません。 無効にされています',
				LBL_DOCUMENT_NOT_AVAILABLE : 'このドキュメントはダウンロードできません',
				LBL_FOLDER_SHOULD_BE_EMPTY : 'フォルダを削除するには空である必要があります。',
    
				LBL_PLEASE_SELECT_FILE_TO_UPLOAD : 'アップロードするファイルを選択してください。',
				LBL_ARE_YOU_SURE_TO_MOVE_TO : 'ファイルを ',
				LBL_FOLDER : '  フォルダに移動しますか？',
				LBL_UNABLE_TO_UPDATE : 'アップデートできません。 やり直してください。',
				LBL_BLANK_REPLACEMENT: "置換に空の値は選択できません",
    
				LBL_IMAGE_DELETED : '画像削除済み',
    
    /* Tooltip management */
				ERR_FIELD_SELECTION : 'フィールド選択にエラーがあります',
    
    /* Inventory validation strings */
				NO_LINE_ITEM_SELECTED : '$$$ライン アイテムを選択していません。 少なくとも 1 つのライン アイテムを選択してください。',
				LINE_ITEM : 'ライン アイテム',
				LIST_PRICE: '定価',
    
    /* Webmails */
				LBL_PRINT_EMAIL : '印刷', 
				LBL_DELETE_EMAIL : '削除', 
				LBL_DOWNLOAD_ATTACHMENTS : '添付ファイルのダウンロード', 
				LBL_QUALIFY_EMAIL : '認定する', 
				LBL_FORWARD_EMAIL : '転送', 
				LBL_REPLY_TO_SENDER : '送信者へ返信', 
				LBL_REPLY_TO_ALL : 'すべてに返信',
    
				LBL_WIDGET_HIDDEN : 'ウィジェット非表示',
				LBL_RESTORE_FROM_PREFERENCES : '私の設定から復元できます',
				ERR_HIDING : '非表示中にエラー',
				MSG_TRY_AGAIN : 'やり直してください',
    
				MSG_ENABLE_SINGLEPANE_VIEW : '単一ページ表示有効',
				MSG_DISABLE_SINGLEPANE_VIEW : '単一ページ表示無効',
    
				MSG_FTP_BACKUP_DISABLED : 'FTP バックアップ無効',
				MSG_LOCAL_BACKUP_DISABLED : 'ローカル バックアップ無効',
				MSG_FTP_BACKUP_ENABLED : 'FTP バックアップ無効',
				MSG_LOCAL_BACKUP_ENABLED : 'ローカル バックアップ有効',
				MSG_CONFIRM_PATH : 'パス詳細の確認',
				MSG_CONFIRM_FTP_DETAILS : 'FTP 詳細の確認',
    
				START_PERIOD_END_PERIOD_CANNOT_BE_EMPTY : '開始時期や終了時期は空にできません',
    
    /* added to fix i18n issues with home page*/
				LBL_ADD: '( 追加 ) ',
				Module: 'モジュール',
				DashBoard: 'ダッシュボード',
				RSS: 'RSS',
				Default: 'デフォルト',
				Notebook: 'ノートブック',
				SPECIAL_CHARS:'\\ / < > + \' " ',

				ERROR_DELETING_TRY_AGAIN: '削除する際にエラーが発生しました。再度試してください',
				LBL_ENTER_WINDOW_TITLE: 'ウィンドウ タイトルを入力してください',
				LBL_SELECT_ONLY_FIELDS: 'フィールドは２つまでしか、選択できません。',
				LBL_ENTER_RSS_URL:'RSS URLを入力してください',
				LBL_ADD_HOME_WIDGET: 'ウィジェットを追加できませんでした。再度試してください',
				WIDGET_DELETED_SUCESS: 'ウィジェットを削除しました。'

   };