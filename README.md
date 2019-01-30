# README

## DB構成

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,null: false, unique: true|
|mail|string|null: false|
|password|string|null: false|

### Association
- has_many :members
- has_many :groups , through: :members
- has_many :messages


## groupテーブル
Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

#### Association
- has_many :members
- has_many :users , through: :members
- has_many :messages


## messageテーブル
Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

